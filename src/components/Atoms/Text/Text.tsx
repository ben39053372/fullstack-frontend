import React from 'react';
import { Text as _Text, PixelRatio } from 'react-native';
import { TypographyProps } from '.';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';

export function Text(props: TypographyProps) {
  const theme = useMyTheme();
  const colorTheme = useColorAppearance();
  const { css, ..._props } = props;
  return (
    <_Text
      {..._props}
      style={[
        {
          fontSize: theme.typography[props.textVariant || 'h6'].fontSize * 8,
          margin: theme.spacing.lg,
          color: theme.color.text[colorTheme],
        },
        props.style,
      ]}
    >
      {props.children}
    </_Text>
  );
}
