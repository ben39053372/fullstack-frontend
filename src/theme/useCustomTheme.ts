import { useTheme } from 'react-native-elements';
import { Theme } from '.';

export const useCustomTheme = () => ({
  theme: useTheme().theme as Theme,
});
