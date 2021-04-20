import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <View>
      <View>
        <Text>Header(native)</Text>
      </View>
      {props.children}
      <View>
        <Text>Footer(native)</Text>
      </View>
    </View>
  );
}
