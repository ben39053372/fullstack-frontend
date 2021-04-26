import React from 'react';
import { Text } from 'react-native';
import { TypographyProps } from '.';

export const H5 = (props: TypographyProps) => {
  return <Text>{props.children}</Text>;
};
