import { AppProps } from 'next/app';
import GlobalRouteProgressBar from '../components/Atoms/GlobalROuteProgressBar/GlobalRouteProgressBar';
import Main from '../components/Layouts/Main';
import React, { useContext } from 'react';
import Providers from '../providers';
import { constant } from '../const';
import { NavBar } from '../components/Groups/NavBar';
import { AuthContext } from '../utils/Auth/AuthGuard';

export default function App({ Component, pageProps }: AppProps) {
  const { state } = useContext(AuthContext);
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
