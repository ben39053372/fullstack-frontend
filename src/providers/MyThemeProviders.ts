import { createContext, useContext } from 'react';
// import { useColorScheme } from 'react-native-appearance';

export const theme: DefaultTheme = {
  color: {
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
    text: {
      light: '#303030',
      main: '#505050',
      dark: '#fff',
    },
    background: {
      light: '#f0f0f0',
      main: '#ddd',
      dark: '#303030',
    },
  },
  typography: {
    h1: {
      fontSize: 2,
      margin: 8,
    },
    h2: {
      fontSize: 1.8,
      margin: 8,
    },
    h3: {
      margin: 8,
      fontSize: 1.4,
    },
    h4: {
      margin: 8,
      fontSize: 1.2,
    },
    h5: {
      margin: 8,
      fontSize: 1,
    },
    h6: {
      margin: 8,
      fontSize: 0.8,
    },
  },
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
};

export const MyThemeContext = createContext<DefaultTheme>(theme);

export const MyThemeProvider = MyThemeContext.Provider;

export const useMyTheme = () => useContext(MyThemeContext);

export const useColorAppearance = () => {
  // const color = useColorScheme();
  const color = 'dark';
  return color === 'dark' ? 'dark' : color === 'light' ? 'light' : 'main';
};
