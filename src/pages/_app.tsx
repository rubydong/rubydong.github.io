import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';

import 'styles/index.css';
import Navigation from '../components/Navigation';

export const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <title>Ruby Dong</title>
      {/* TODO: update favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <Component {...pageProps} />
  </>
);

export default App;
