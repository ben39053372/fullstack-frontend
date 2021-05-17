import type { StackHeaderProps } from '@react-navigation/stack';
import { ViewProps } from 'react-native';

export * from './NavBar';

export interface NavBarProps extends ViewProps, Partial<StackHeaderProps> {
  title: string;
  color?: keyof ColorVariant;
}
