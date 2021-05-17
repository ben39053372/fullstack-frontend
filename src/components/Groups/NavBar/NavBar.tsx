import React from 'react';
import { NavBarProps } from '.';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Text } from '../../Atoms/Text';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';
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
        {
          width: '100%',
          backgroundColor: theme.color[props.color || 'primary'][appearance],
        },
        props.style,
      ]}
    >
      <SafeAreaView>

        <Pressable
          onPress={() => navigate({ routeName: 'home' })}
          style={({ hovered }: PressableState) => ({
            backgroundColor: hovered
              ? theme.color[props.color || 'primary'].dark
              : theme.color[props.color || 'primary'][appearance],
          })}
        >
          <View>
            <Text textVariant="h2">{props.title}</Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}
