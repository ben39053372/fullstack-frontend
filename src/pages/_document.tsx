// @generated: @expo/next-adapter@2.1.5
// export { default } from '@expo/next-adapter/document'
import { getInitialProps } from '@expo/next-adapter/document';

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
