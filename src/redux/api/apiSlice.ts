import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Book", "User"],
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Book"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Book"],
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    createUser: builder.mutation({
      query: (data) => ({
        url: `/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    signInUser: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
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
  useSignInUserMutation,
} = api;
