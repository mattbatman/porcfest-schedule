import React from 'react';
import AppProvider from '../contexts/AppProvider';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
