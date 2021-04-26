// @generated: @expo/next-adapter@2.1.5
// export { default } from '@expo/next-adapter/document'
import { style } from '@expo/next-adapter/document';

import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';

export async function getInitialProps({ renderPage }: { renderPage: any }) {
  const sheet = new ServerStyleSheet()
  const styleTags = sheet.getStyleElement()
  AppRegistry.registerComponent('Main', () => Main);
  // @ts-ignore
  const { getStyleElement } = AppRegistry.getApplication('Main');
  const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
  const styles = [<style dangerouslySetInnerHTML={{ __html: style }} />, getStyleElement(), styleTags];
  return { ...page, styles: React.Children.toArray(styles), styleTags };
}

class MyDocument extends Document {
  static getInitialProps = getInitialProps
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
