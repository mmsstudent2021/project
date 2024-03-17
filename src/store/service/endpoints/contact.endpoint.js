import { ApiService } from "../ApiService";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (arg) => ({
        url: "contact",
        method: "POST",
        body: arg,
      }),
    }),
    get: builder.query({
      query: () => "contact",
    }),
  }),
});

export const { useCreateMutation, useGetQuery } = contactEndpoint;
