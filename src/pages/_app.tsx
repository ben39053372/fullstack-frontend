import { AppProps } from 'next/app';
import GlobalRouteProgressBar from '../components/GlobalRouteProgressBar';
import Main from '../layouts/Main';
import React from 'react';
import Providers from '../Providers';

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
