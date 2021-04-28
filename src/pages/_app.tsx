import { AppProps } from 'next/app';
import GlobalRouteProgressBar from '../components/Atoms/GlobalROuteProgressBar/GlobalRouteProgressBar';
import Main from '../components/Layouts/Main';
import React from 'react';
import Providers from '../providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <GlobalRouteProgressBar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </Providers>
  );
}
