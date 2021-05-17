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
import { Button } from '../Button';

export function NavBar(props: NavBarProps) {
  const theme = useMyTheme();
  const appearance = useColorAppearance();
  const { navigate } = useRouting();

  return (
    <View
      {...props}
      style={[
        { backgroundColor: theme.color[props.color || 'primary'][appearance] },
        { flexDirection: "row", padding: 5 },
        props.style,
      ]}
    >
      <Pressable
        onPress={() => navigate({ routeName: '' })}
        style={({ hovered }: PressableState) => ({
          backgroundColor: hovered
            ? theme.color[props.color || 'primary'].dark
            : theme.color[props.color || 'primary'][appearance],
        })}
      >
        <Text textVariant="h2" css={{ alignSelf: "flex-start" }}>
          {props.title}
        </Text>
      </Pressable>
      <View style={{ flex: 1 }} />
      <View style={{ justifyContent: "center", flexDirection: "row" }} >

        <Button text="Login" textVariant="h4" onPress={() => navigate({ routeName: "login" })} />

        <View style={{ width: 5 }} />

        <Button text="Login" textVariant="h4" onPress={() => navigate({ routeName: "login" })} />

      </View>
    </View>
  );
}
