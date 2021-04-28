import React from 'react';
import { NavBarProps } from '.';
import { Pressable, View } from 'react-native';
import { Text } from '../../Atoms/Text';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';
import { useRouter } from 'next/dist/client/router';
import { useRouting } from 'expo-navigation-core';
import { PressableState } from '../../../interface';

export function NavBar(props: NavBarProps) {
  const theme = useMyTheme();
  const appearance = useColorAppearance();
  const { navigate } = useRouting();
  return (
    <View
      {...props}
      style={[
        { backgroundColor: theme.color[props.color || 'primary'][appearance] },
        props.style,
      ]}
    >
      <Pressable
        onPress={() => navigate({ routeName: 'Home' })}
        style={({ pressed, hovered, focused }: PressableState) => ({
          backgroundColor: hovered
            ? theme.color[props.color || 'primary'].dark
            : theme.color[props.color || 'primary'][appearance],
        })}
      >
        {({ pressed, hovered, focused }: PressableState) => {
          return (
            <View>
              <Text textVariant="h2">{props.title}</Text>
            </View>
          );
        }}
      </Pressable>
    </View>
  );
}
