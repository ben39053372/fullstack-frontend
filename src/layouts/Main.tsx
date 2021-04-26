import React from 'react';
import { ScrollView, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { DrawerLayout } from '../components/Group/DrawerLayout';
import { DrawerView } from '../components/Group/DrawerView';
import { NavBar } from '../components/Group/NavBar';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#09c" }}>
      <DrawerLayout drawerView={DrawerView}>
        <NavBar />
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#fff" }}>
          {props.children}
        </ScrollView>
        <View>
          <Text>footer</Text>
        </View>
      </DrawerLayout>
    </SafeAreaView>
  );
}
