import React from 'react';
import { NavBarProps } from '.';
import { View } from 'react-native';
import { Text } from '../../Atoms/Text';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';

export function NavBar(props: NavBarProps) {
  const theme = useMyTheme();
  const appearance = useColorAppearance();
  return (
    <View
      {...props}
      style={[
        { backgroundColor: theme.color[props.color || 'primary'][appearance] },
        props.style,
      ]}
    >
      <Text variant="h2">{props.title}</Text>
    </View>
  );
}
