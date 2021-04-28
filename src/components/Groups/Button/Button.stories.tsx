import React from 'react';
import { Button } from '.';
import { MyThemeProvider, theme } from '../../../providers/MyThemeProviders';

export const Default = () => (
  <Button
    text="change to en"
    textVariant="h3"
    onPress={() => console.log('I am Button')}
  />
);

export default {
  component: Button,
  title: 'Button',
  decorators: [
    (Story: any) => (
      <MyThemeProvider value={theme}>
        <Story />
      </MyThemeProvider>
    ),
  ],
};
