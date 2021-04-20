import React from 'react';
import { View } from 'react-native';
import { Text, Header } from 'react-native-elements';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <View>
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <View>{props.children} </View>
      <Text>Footer</Text>
    </View>
  );
}
