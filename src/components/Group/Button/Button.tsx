import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import * as T from '../../Atoms/Text';

export interface ButtonProps {
  text: string;
  textVariant: keyof typeof T;
  onPress(event: GestureResponderEvent): void;
}

export function Button(props: ButtonProps) {
  const Text = T[props.textVariant];

  return (
    <TouchableOpacity onPress={(e) => props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}
