// Re-export the root component from the Next.js website
// as the root component for the native React app.
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from 'styled-components'
import { store } from '../store/store';
import { theme } from '../theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppearanceProvider>{children}</AppearanceProvider>
      </ThemeProvider>
    </Provider>
  );
}
