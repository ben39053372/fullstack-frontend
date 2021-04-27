import { createContext, useContext } from 'react';

export const theme: DefaultTheme = {
  typography: {
    h1: {
      fontSize: 2,
    },
    h2: {
      fontSize: 1.8,
    },
    h3: {
      fontSize: 1.4,
    },
    h4: {
      fontSize: 1.2,
    },
    h5: {
      fontSize: 1,
    },
    h6: {
      fontSize: 0.8,
    },
  },
};

export const MyThemeContext = createContext<DefaultTheme>(theme);

export const MyThemeProvider = MyThemeContext.Provider;

export const useMyTheme = () => useContext(MyThemeContext);
