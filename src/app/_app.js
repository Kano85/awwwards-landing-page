// pages/_app.js
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
