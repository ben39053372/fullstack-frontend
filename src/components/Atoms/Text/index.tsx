import { ReactNode } from 'react';
import { TextProps } from 'react-native';

export * from './Text';

export interface TypographyProps extends TextProps {
  children: ReactNode;
  textVariant?: keyof TextVariant;
  colorVariant?: keyof ColorVariant;
  css?: React.CSSProperties;
}
