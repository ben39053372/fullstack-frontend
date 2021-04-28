import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useMyTheme } from '../../../providers/MyThemeProviders';
import { Text } from '../../Atoms/Text';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  textVariant: keyof TextVariant;
  onPress(event: GestureResponderEvent): void;
}

export function Button(props: ButtonProps) {
  const theme = useMyTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          backgroundColor: theme.color.secondary.dark,
        },
        props.style,
      ]}
    >
      <Text variant={props.textVariant || 'h3'}>{props.text}</Text>
    </TouchableOpacity>
  );
}
