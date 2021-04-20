import { DeepPartial } from '@reduxjs/toolkit';
import type { DividerProps, FullTheme, TextProps } from 'react-native-elements';

interface Theme extends DeepPartial<FullTheme> {}

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
};
