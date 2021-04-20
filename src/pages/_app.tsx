import { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { theme } from '../theme';
import GlobalRouteProgressBar from '../components/GlobalRouteProgressBar';
import Main from '../layouts/Main';

export default function App({ Component, pageProps }: AppProps) {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
          <SafeAreaProvider>
            <GlobalRouteProgressBar />
            <Main>
              <Component {...pageProps} />
            </Main>
          </SafeAreaProvider>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
}
