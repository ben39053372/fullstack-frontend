// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { increment, decrement } from '../features/counter/counterSlice';
import { Divider, Button } from 'react-native-elements';

export default function App() {
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text h1>hi Welcome to Expo + Next.js 👋</Text>
      <Divider />
      <Text h2>i18n</Text>
      {t('test')}
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          justifyContent: 'space-around',
        }}
      >
        <Button
          title="change to en"
          onPress={() => i18n.changeLanguage('en')}
        />
        <Button
          title="change to zh-HK"
          onPress={() => i18n.changeLanguage('zh-hk')}
        />
      </View>
      <Divider />
      <Text h2>Redux</Text>

      <Text>Count: {count}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          justifyContent: 'space-around',
        }}
      >
        <Button title="increment" onPress={() => dispatch(increment())} />
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
