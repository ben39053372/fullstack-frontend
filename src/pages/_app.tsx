import { AppProps } from 'next/app';
import GlobalRouteProgressBar from '../components/Atoms/GlobalROuteProgressBar/GlobalRouteProgressBar';
import Main from '../components/Layouts/Main';
import React from 'react';
import Providers from '../providers';
import { constant } from '../const';
import { NavBar } from '../components/Groups/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <GlobalRouteProgressBar />
      <Main
        title={constant.appTitle}
        navBar={<NavBar title={constant.appTitle} />}
      >
        <Component {...pageProps} />
      </Main>
    </Providers>
  );
}
