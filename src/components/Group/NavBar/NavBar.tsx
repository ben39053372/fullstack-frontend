import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from './NavBar.style';
import { H2 } from '../../Atoms/Typography';

export function NavBar() {
  return (
    <Container>
      <H2>NavBar</H2>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon: { padding: 5, marginVertical: "auto" }
})
