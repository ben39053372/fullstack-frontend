import React, { ReactNode } from 'react';
import { StyleSheet, Text, PixelRatio } from 'react-native';
import { useMyTheme } from '../../../providers/MyThemeProviders';

export interface TextProps {
  children: ReactNode;
}

export function H1(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h2, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

export function H2(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h2, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

export function H3(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h3, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

export function H4(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h4, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

export function H5(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h5, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

export function H6(props: TextProps) {
  const theme = useMyTheme();
  return (
    <Text style={[fontStyles.h6, { fontSize: theme.typography.h1.fontSize }]}>
      {props.children}
    </Text>
  );
}

const fontStyles = StyleSheet.create({
  h1: {
    fontSize: PixelRatio.get() * 2,
    margin: 0,
  },
  h2: {
    fontSize: PixelRatio.get() * 1.4,
    margin: 0,
  },
  h3: {
    fontSize: PixelRatio.get() * 1.2,
    margin: 0,
  },
  h4: {
    fontSize: PixelRatio.get() * 1,
    margin: 0,
  },
  h5: {
    fontSize: PixelRatio.get() * 0.9,

    margin: 0,
  },
  h6: {
    fontSize: PixelRatio.get() * 0.9,
    margin: 0,
  },
});
