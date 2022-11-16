import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { ActivityIndicator } from '../components/activity-indicator';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ActivityIndicator />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
