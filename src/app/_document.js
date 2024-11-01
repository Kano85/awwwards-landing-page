// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/* Additional head elements can go here */}</Head>
        <body className="__className_d65c78">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
