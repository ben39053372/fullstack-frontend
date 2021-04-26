import React from 'react';
import { Text } from 'react-native';
import { TypographyProps } from '.';

export const H2 = (props: TypographyProps) => {
  return <Text>{props.children}</Text>;
};
