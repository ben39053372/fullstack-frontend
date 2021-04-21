import { useTheme } from 'react-native-elements';
import { Theme } from '.';

export const useCustomTheme = () => useTheme().theme as Theme;
