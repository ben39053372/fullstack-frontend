import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Header } from 'react-native-elements';

interface MainProps {
  children: React.ReactNode;
}

export default function Main(props: MainProps) {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {props.children}
      </ScrollView>
      <Text>Footer</Text>
    </View>
  );
}
