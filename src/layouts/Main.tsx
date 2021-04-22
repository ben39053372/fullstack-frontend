import React from 'react';
import { ScrollView, View } from 'react-native';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {props.children}
      </ScrollView>
    </View>
  );
}
