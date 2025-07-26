import { endpoints } from "@/helper/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PublicQueryModel } from "../model/publicQueryModel";

export const PublicQueryApi = createApi({
  reducerPath: "ieltsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  tagTypes: ["ielts"],
  endpoints: (builder) => ({
    getIELtsProduct: builder.query<PublicQueryModel, void>({
      query: () => endpoints.public.product_ielts_list,
      providesTags: ["ielts"],
    }),
  }),
});

export const { useGetIELtsProductQuery } = PublicQueryApi;
