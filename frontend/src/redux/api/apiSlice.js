import Cockies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const NEXT_PUBLIC_API_BASE_URL = "http://localhost:8800/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: NEXT_PUBLIC_API_BASE_URL,
  }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "Product",
    "Products",
    "ProductType",
    "OfferProducts",
    "TopRatedProducts",
    "RelatedProducts",
    "PopularProducts",
  ],
});
