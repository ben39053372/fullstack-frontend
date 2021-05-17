import React from 'react';
import { SafeAreaView } from 'react-native';
import { DrawerLayout } from '../Groups/DrawerLayout';
import { DrawerView } from '../Groups/DrawerView';
import { useColorAppearance, useMyTheme } from '../../providers/MyThemeProviders';

interface MainProps {
  children: React.ReactNode;
  title?: string
  footer?: React.ReactNode
  drawerView?: () => JSX.Element
  navBar?: React.ReactNode
}

export default function Main(props: MainProps) {
  const theme = useMyTheme();
  const colorTheme = useColorAppearance();
  return (
    <DrawerLayout drawerView={props.drawerView || DrawerView}>
      {props.navBar}
      {props.children}
      {props.footer}
    </DrawerLayout>
  );
}
