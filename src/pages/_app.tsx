import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import React, { ReactElement } from 'react';

import 'styles/index.css';
import Navigation from '../components/Navigation';

export const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <title>Ruby Dong</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Google Analytics */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-D05HNG76LX"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D05HNG76LX');
      `}
    </Script>

    <Navigation />
    <Component {...pageProps} />
  </>
);

export default App;
