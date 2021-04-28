import { ReactNode } from 'react';
import { TextProps } from 'react-native';

export * from './Text';

export interface TypographyProps extends TextProps {
  children: ReactNode;
  variant?: keyof TextVariant;
  css?: React.CSSProperties;
}
