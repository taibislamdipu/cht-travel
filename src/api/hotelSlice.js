import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cht-travel-server-production.up.railway.app/",
  }),
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    getHotel: builder.query({
      query: () => ({ url: "hotels" }),
      providesTags: ["Hotels"],
    }),
    addHotel: builder.mutation({
      query: (data) => ({ url: "addHotels", method: "POST", body: data }),
      invalidatesTags: ["Hotels"],
    }),
    removeHotel: builder.mutation({
      query: (id) => ({ url: `hotel/${id}`, method: "DELETE" }),
      invalidatesTags: ["Hotels"],
    }),
    updateHotel: builder.mutation({
      query: (data) => ({
        url: `updateHotel/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Hotels"],
    }),
  }),
});

export const {
  useGetHotelQuery,
  useAddHotelMutation,
  useRemoveHotelMutation,
  useUpdateHotelMutation,
} = hotelApi;
