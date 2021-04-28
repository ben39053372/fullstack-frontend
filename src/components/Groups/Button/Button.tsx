import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';
import { Text } from '../../Atoms/Text';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  textVariant: keyof TextVariant;
  onPress(event: GestureResponderEvent): void;
}

export function Button(props: ButtonProps) {
  const colorTheme = useColorAppearance();
  const theme = useMyTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          backgroundColor: theme.color.secondary[colorTheme],
        },
        props.style,
      ]}
    >
      <Text textVariant={props.textVariant || 'h3'}>{props.text}</Text>
    </TouchableOpacity>
  );
}
