import React from 'react';
import { Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Container } from './NavBar.style';
import { H2 } from '../../Atoms/Typography';

export function NavBar() {
  return (
    <>
      <Container>
        <Fontisto name="nav-icon" />
        <H2>Web NavBar</H2>
      </Container>
    </>
  );
}
