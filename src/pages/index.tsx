// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { Divider, Button } from 'react-native-elements';
import { Link, useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';
import Container from '../components/Container';

export default function App() {
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { navigate } = useRouting();
  return (
    <View style={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Text h1>hi Welcome to Expo + Next.js 👋</Text>
      <Divider />
      <Text h2>i18n</Text>
      <Text>{t('test')}</Text>
      <View style={styles.section}>
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
      <View style={styles.section}>
        <Button title="increment" onPress={() => dispatch(increment())} />
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Divider />
      <Text h2>React Navigation</Text>
      <Button
        title="Goto About(useRouting)"
        onPress={() => navigate({ routeName: 'About' })}
      />
      <Button title={<Link routeName="About">{'Goto About(<Link />)'}</Link>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
});
