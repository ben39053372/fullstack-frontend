import React from 'react';
import { Text as _Text, PixelRatio } from 'react-native';
import { TypographyProps } from '.';
import { useMyTheme } from '../../../providers/MyThemeProviders';

export function Text(props: TypographyProps) {
  const theme = useMyTheme();
  const { css, ..._props } = props;
  return (
    <_Text
      {..._props}
      style={[
        {
          fontSize:
            theme.typography[props.variant || 'h6'].fontSize *
            // PixelRatio.get() *
            8,
          margin: theme.spacing.xl,
        },
        props.style,
      ]}
    >
      {props.children}
    </_Text>
  );
}
