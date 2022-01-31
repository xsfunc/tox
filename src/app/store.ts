import { configureStore, combineReducers } from '@reduxjs/toolkit';
import theme from 'features/theme/themeSlice';
import dialog from 'features/dialog/dialogSlice';
import swap from 'features/swap/swapSlice';
import snackbar from 'features/snackbar/snackbarSlice';
import i18n from 'features/i18n/i18nSlice';
import wallet from 'features/wallet/walletSlice';
import storage from 'redux-persist/lib/storage';
import stateReconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { mockApi } from 'features/api/mockApiSlice';
import { tonApi } from 'features/api/tonApiSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const devTools = process.env.NODE_ENV === 'development';
const persistConfig = {
  storage,
  key: 'root',
  version: 1,
  whitelist: ['theme', 'wallet'],
  stateReconciler,
};

const rootReducer = combineReducers({
  theme,
  dialog,
  swap,
  snackbar,
  i18n,
  wallet,
  [mockApi.reducerPath]: mockApi.reducer,
  [tonApi.reducerPath]: tonApi.reducer,
});
const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  devTools,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(mockApi.middleware)
      .concat(tonApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
