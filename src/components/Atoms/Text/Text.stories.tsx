import React from 'react';
import { Text } from '.';
import { MyThemeProvider, theme } from '../../../providers/MyThemeProviders';

export const Default = () => <Text>some text</Text>;

export const H1 = () => <Text textVariant="h1">some text</Text>;
export const H2 = () => <Text textVariant="h2">some text</Text>;
export const H3 = () => <Text textVariant="h3">some text</Text>;
export const H4 = () => <Text textVariant="h4">some text</Text>;
export const H5 = () => <Text textVariant="h5">some text</Text>;
export const H6 = () => <Text textVariant="h6">some text</Text>;

export default {
  component: Text,
  title: 'Text',
  decorators: [
    (Story: any) => (
      <MyThemeProvider value={theme}>
        <Story />
      </MyThemeProvider>
    ),
  ],
};
