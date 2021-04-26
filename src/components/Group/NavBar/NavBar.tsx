import React from 'react';
import { View, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Container } from './NavBar.style';

export function NavBar() {
  return (
    <View>
      <Text>Native NavBar</Text>
      <Container>
        <Fontisto name="nav-icon" />
      </Container>
    </View>
  );
}
