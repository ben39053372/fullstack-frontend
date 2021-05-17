import React from 'react';
import { StyleSheet } from 'react-native';
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
          justifyContent: "center",
          borderRadius: 10,
          shadowOffset: {
            width: 1,
            height: 1
          },
          shadowOpacity: 0.4,
        },
        ButtonStyle.base,
        props.style,
      ]}
    >
      <Text textVariant={props.textVariant || 'h3'}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const ButtonStyle = StyleSheet.create({
  base: {
    justifyContent: "center",
    borderRadius: 10
  }
})
