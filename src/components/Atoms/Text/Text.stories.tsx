import React from 'react';
import { Text } from '.';
import { MyThemeProvider, theme } from '../../../providers/MyThemeProviders';

export const Default = () => <Text>some text</Text>;

export const H1 = () => <Text variant="h1">some text</Text>;
export const H4 = () => <Text variant="h4">some text</Text>;
export const H5 = () => <Text variant="h5">some text</Text>;
export const H6 = () => <Text variant="h6">some text</Text>;

export default {
  component: Text,
  title: 'Button',
  decorators: [
    (Story: any) => (
      <MyThemeProvider value={theme}>
        <Story />
      </MyThemeProvider>
    ),
  ],
};
