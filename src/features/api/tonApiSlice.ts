import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tonApi = createApi({
  reducerPath: 'tonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ton.sh' }),
  endpoints: (builder) => ({
    getCoinPrice: builder.query({
      query: () => `/getCoinPrice`,
      transformResponse: ({result}) => Number(result).toFixed(3)
    }),
  }),
});

export const { useGetCoinPriceQuery } = tonApi;
