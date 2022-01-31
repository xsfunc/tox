import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { persistor, store } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CustomThemeProvider } from 'features/theme';
import { RootDialog } from 'features/dialog/RootDialog';
import SnackbarStack from 'features/snackbar/SnackbarStack';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ProgressBar = dynamic(() => import('components/ProgressBar'));

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomThemeProvider>
            {getLayout(<Component {...pageProps} />)}

            <ProgressBar />
            <RootDialog />
            <SnackbarStack />
          </CustomThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
