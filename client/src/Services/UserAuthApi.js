import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserAuthApi = createApi({
  reducerPath: "UserAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8080/api/user/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register",
          method: "Post",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "Post",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = UserAuthApi;
