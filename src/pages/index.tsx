// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import '../i18n'
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}> hi Welcome to Expo + Next.js {t('test')}👋</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
