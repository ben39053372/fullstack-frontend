import React, { ReactNode } from 'react';
import { useMyTheme } from '../../../providers/MyThemeProviders';

interface TextProps {
  children: ReactNode;
}

const fontStyles: React.CSSProperties | undefined = {
  margin: '0px',
};

export function H1(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h1
      style={{ fontSize: `${theme.typography.h1.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h2
      style={{ fontSize: `${theme.typography.h2.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h3
      style={{ fontSize: `${theme.typography.h3.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h3>
  );
}

export function H4(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h4
      style={{ fontSize: `${theme.typography.h4.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h4>
  );
}

export function H5(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h5
      style={{ fontSize: `${theme.typography.h5.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h5>
  );
}

export function H6(props: TextProps) {
  const theme = useMyTheme();
  return (
    <h6
      style={{ fontSize: `${theme.typography.h6.fontSize}rem`, ...fontStyles }}
    >
      {props.children}
    </h6>
  );
}
