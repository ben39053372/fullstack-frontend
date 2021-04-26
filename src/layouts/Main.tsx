import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { DrawerLayout } from '../components/Group/DrawerLayout';
import { triggerDrawer } from '../features/app/appSlice';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { DrawerView } from '../components/Group/DrawerView';
import { NavBar } from '../components/Group/NavBar';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <DrawerLayout drawerView={DrawerView}>
        <NavBar />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          {props.children}
        </ScrollView>
        <View>
          <Text>footer</Text>
        </View>
      </DrawerLayout>
    </>
  );
}
