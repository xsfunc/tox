import { langChanged } from 'features/i18n/i18nSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Language, Translation } from 'features/i18n/i18nConfig';
import { walletConnected, WalletConnected } from 'features/wallet/walletSlice';
import { snackbarAdded } from 'features/snackbar/snackbarSlice';
import { Token } from 'components/TokenItem';
import { Pool } from 'features/pools/PoolTableRow';

export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getTranslation: builder.query<Translation, Language>({
      query: (lang) => `/lang/${lang}.json`,
      async onQueryStarted(lang, { dispatch, queryFulfilled }) {
        try {
          const { data: translation } = await queryFulfilled;
          dispatch(langChanged({ lang, translation }));
        } catch (e) {
          console.error(e.message);
        }
      },
    }),

    connectWallet: builder.query<WalletConnected, null>({
      query: () => `/mock/connect.json`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(walletConnected(data));
          dispatch(snackbarAdded({message: 'Wallet connected'}))
        } catch (e) {
          console.error(e.message);
        }
      },
    }),

    getTokens: builder.query<Token[], undefined>({
      query: () => `/mock/tokens.json`,
    }), 

    getBalances: builder.query({
      query: () => `/balance`,
    }),

    getPools: builder.query<Pool[], undefined>({
      query: () => `/mock/pools.json`,
    }),
  }),
});

export const {
  useLazyGetTranslationQuery,
  useLazyConnectWalletQuery,
  useConnectWalletQuery,
  useGetBalancesQuery,
  useGetPoolsQuery,
  useGetTokensQuery
} = mockApi;
