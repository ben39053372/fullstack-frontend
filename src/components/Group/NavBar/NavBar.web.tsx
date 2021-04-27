import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from './NavBar.style';
import { H2 } from '../../Atoms/Typography';

export function NavBar() {
  return (
    <Container>
      <H2>Web NavBar</H2>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon: { padding: 5, marginVertical: 'auto' },
});
