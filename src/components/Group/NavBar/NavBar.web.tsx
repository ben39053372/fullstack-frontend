import React from 'react';
import { NavBarProps } from '.';
import { Pressable, View } from 'react-native';
import { Text } from '../../Atoms/Text';
import {
  useColorAppearance,
  useMyTheme,
} from '../../../providers/MyThemeProviders';
import { useRouting } from 'expo-next-react-navigation';
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
      <View>
        <Pressable
          onPress={() => navigate({ routeName: '' })}
          style={({ hovered }: PressableState) => ({
            alignItems: 'flex-start',
            backgroundColor: hovered
              ? theme.color[props.color || 'primary'].dark
              : theme.color[props.color || 'primary'][appearance],
          })}
        >
          <Text textVariant="h2" css={{ display: 'block' }}>
            {props.title}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
