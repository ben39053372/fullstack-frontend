import React, { ReactNode, useEffect, useRef } from 'react';
import _DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { useAppDispatch } from '../../../hooks/redux/useAppDispatch';
import {
  closeDrawer,
  openDrawer,
  selectDrawerOpen,
} from '../../../features/app/appSlice';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import { Animated, Platform } from 'react-native';
import { useWindowDimensions } from 'react-native';

interface DrawerLayoutProps {
  drawerView: (progressAnimatedValue: Animated.Value) => React.ReactNode;
  children: ReactNode;
}

export function DrawerLayout(props: DrawerLayoutProps) {
  const dispatch = useAppDispatch();
  const drawer = useRef<_DrawerLayout | null>(null);
  const isDrawerOpen = useAppSelector(selectDrawerOpen);
  const { width } = useWindowDimensions()

  useEffect(() => {
    isDrawerOpen ? drawer.current?.openDrawer() : drawer.current?.closeDrawer();
  }, [isDrawerOpen]);

  return (
    <_DrawerLayout
      ref={drawer}
      onDrawerClose={() => dispatch(closeDrawer())}
      onDrawerOpen={() => dispatch(openDrawer())}
      drawerWidth={Platform.OS === "web" ? 280 : width * 0.85}
      renderNavigationView={props.drawerView}
      drawerBackgroundColor="#ddd"
    >
      {props.children}
    </_DrawerLayout>
  );
}
