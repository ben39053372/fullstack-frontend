import NextNProgress from 'nextjs-progressbar';
import { useMyTheme } from '../../../providers/MyThemeProviders';

export default () => {
  const theme = useMyTheme()
  return (

    <NextNProgress
      color={theme.color.secondary.dark}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
  )
};
