import React from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { DrawerLayout } from '../Groups/DrawerLayout';
import { DrawerView } from '../Groups/DrawerView';
import { NavBar } from '../Groups/NavBar';
import { useColorAppearance, useMyTheme } from '../../providers/MyThemeProviders';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  const theme = useMyTheme();
  const colorTheme = useColorAppearance();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.color.background[colorTheme] }}
    >
      <DrawerLayout drawerView={DrawerView}>
        <NavBar title="react-native-expo-next" />
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          {props.children}
        </ScrollView>
        <View>
          <Text>footer</Text>
        </View>
      </DrawerLayout>
    </SafeAreaView>
  );
}
