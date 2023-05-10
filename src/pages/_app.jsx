import React from 'react';
import Head from 'next/head';
import AppProvider from '../contexts/AppProvider';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="responsive" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}
