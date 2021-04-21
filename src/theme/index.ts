import { DeepPartial } from '@reduxjs/toolkit';
import type { DividerProps, FullTheme, TextProps } from 'react-native-elements';

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Theme extends DeepPartial<FullTheme> {
  Breakpoints: Breakpoints;
}

const Breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const Divider: DeepPartial<Partial<DividerProps>> = {
  style: {
    width: '90%',
    marginVertical: 10,
  },
};

const Text: DeepPartial<Partial<TextProps>> = {
  h1Style: {
    fontSize: 32,
  },
  h2Style: {
    fontSize: 34,
  },
  h3Style: {
    fontSize: 16,
  },
  h4Style: {
    fontSize: 8,
  },
};

export const theme: Theme = {
  Divider,
  Text,
  Breakpoints,
};
