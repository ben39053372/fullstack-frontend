// Re-export the root component from the Next.js website
// as the root component for the native React app.
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../store';
import { theme } from '../theme';
import { ThemeProvider } from 'react-native-elements';

export default function Providers({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
}
