import { ViewProps } from 'react-native';

export * from './NavBar';

export interface NavBarProps extends ViewProps {
  title: string;
  color?: keyof ColorVariant;
}
