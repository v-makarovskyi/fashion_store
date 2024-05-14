import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "http://localhost:8800/api/product/all",
      providesTags: ['products']
    }),
    getProductType: builder.query({
      query: ({ type, query }) => `http://localhost:8800/api/product/${type}?${query}`,
      providesTags: ['ProductType']
    }),
    getOfferProducts: builder.query({
      query: () => "",
      providesTags: ['OfferProducts']
    }),
    getPopularProductByType: builder.query({
      query: (type) => `http://localhost:8800/api/product/popular/${type}`,
      providesTags: ['PopularProducts']
    }),
    getTopRatedProducts: builder.query({
      query: () => "",
      providesTags: ['TopRatedProducts']
    }),
    //single product
    getProduct: builder.query({
      query: () => "",
      providesTags: ['Product']
    }),
    //get related products
    getRelatedProducts: builder.query({
      query: () => "",
      providesTags: ['RelatedProducts']
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductTypeQuery,
  useGetOfferProductsQuery,
  useGetPopularProductByTypeQuery,
  useGetTopRatedProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
} = productApi;
