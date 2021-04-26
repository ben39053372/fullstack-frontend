import React from 'react';
import { Text } from 'react-native';
import { TypographyProps } from '.';

export const H6 = (props: TypographyProps) => {
  return <Text>{props.children}</Text>;
};
