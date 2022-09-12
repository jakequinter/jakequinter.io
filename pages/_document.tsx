import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/hwk5xdw.css" />
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-600 text-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
