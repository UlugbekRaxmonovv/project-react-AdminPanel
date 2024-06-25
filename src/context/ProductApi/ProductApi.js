import { api } from '../Api/api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (query) => ({ 
        url:  `/products${query.path}`, 
        params:query.params
      }),
      providesTags:["Product"]
    }),
    // Post request
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Patch request
    updateProduct: build.mutation({
      query: ({_id, body})=> ({
        url: `/`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    // Delete request
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    getSorchProdact:build.query({
      query:(params) =>({
        url:`products/search`,
        method: "GET",
        params
      }),
      providesTags:["Product"]
    }),   
    getCategory: build.query({
      query: (params) => ({ 
        url: `/products/category-list`, 
        method: 'GET',
        params 
      }),
      providesTags:[""]
    })
  }),
  })


export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetSorchProdactQuery,
  useGetCategoryQuery,
} = productApi