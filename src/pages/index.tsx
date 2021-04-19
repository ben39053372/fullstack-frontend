// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import '../i18n'
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { increment, decrement } from "../features/counter/counterSlice"

export default function App() {
  const { t } = useTranslation();
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.text}> hi Welcome to Expo + Next.js {t('test')}👋</Text>
      <Text>Count: {count}</Text>
      <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-around" }}>
        <Button title="increment" onPress={() => dispatch(increment())} />
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
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
