import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Container } from './NavBar.style';
import { H2 } from '../../Atoms/Typography';

export function NavBar() {
  return (
    <Container>
      <Fontisto name="nav-icon" style={styles.icon} />
      <H2>NavBar</H2>
    </Container>
  );
}

const styles = StyleSheet.create({
  icon: { padding: 5, marginVertical: "auto" }
})
