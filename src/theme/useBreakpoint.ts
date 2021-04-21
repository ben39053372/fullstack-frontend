import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { useCustomTheme } from './useCustomTheme';

export const useBreakpoint = () => {
  const { theme } = useCustomTheme();
  const { width } = useWindowDimensions();
  const [bp, setBp] = useState<string>('lg');

  useEffect(() => {
    const sortedBp = Object.entries(theme.Breakpoints)
      .sort((a, b) => b[1] - a[1])
      .find((bp) => bp[1] < width)?.[0];

    setBp(sortedBp || 'xl');
  }, [width]);

  return bp;
};
