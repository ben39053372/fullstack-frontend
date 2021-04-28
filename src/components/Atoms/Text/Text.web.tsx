import React from 'react';
import { TypographyProps } from '.';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';

export function Text(props: TypographyProps) {
  const theme = useMyTheme();
  const colorTheme = useColorAppearance();

  const style: React.CSSProperties = {
    fontSize: `${theme.typography[props.textVariant || 'h6'].fontSize}rem`,
    margin: theme.spacing.md,
    color: theme.color.text[colorTheme],
    ...props.css,
  };

  switch (props.textVariant || 'h6') {
    case 'h1':
      return <h1 style={style}>{props.children}</h1>;
    case 'h2':
      return <h2 style={style}>{props.children}</h2>;
    case 'h3':
      return <h3 style={style}>{props.children}</h3>;
    case 'h4':
      return <h4 style={style}>{props.children}</h4>;
    case 'h5':
      return <h5 style={style}>{props.children}</h5>;
    case 'h6':
      return <h6 style={style}>{props.children}</h6>;
    default:
      return <p style={props.css}>{props.children}</p>;
  }
}
