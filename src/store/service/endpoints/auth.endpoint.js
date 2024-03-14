import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        body: arg,
      }),
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "register",
        method: "POST",
        body: arg,
      }),
    }),
    profile: builder.query({
      query: () => "user-profile",
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useProfileQuery } =
  authEndpoints;
