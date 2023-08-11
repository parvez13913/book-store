import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/v1/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = api;
