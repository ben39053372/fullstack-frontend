// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { Divider, Button } from 'react-native-elements';
import { Link, useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';

const App = () => {
  console.log('test');
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { navigate } = useRouting();

  return (
    <View style={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Text>hi Welcome to Expo + Next.js 👋</Text>
      <Divider />
      <Text>i18n</Text>
      {t('test')}
      <View style={styles.section}>
        <Button
          style={{ flex: 1 }}
          title="change to en"
          onPress={() => i18n.changeLanguage('en')}
        />
        <Button
          style={{ flex: 1 }}
          title="change to zh-HK"
          onPress={() => i18n.changeLanguage('zh-hk')}
        />
      </View>
      <Divider />
      <Text>Redux</Text>

      <Text>Count: {count}</Text>
      <View style={styles.section}>
        <Button
          style={{ flex: 1 }}
          title="increment"
          onPress={() => dispatch(increment())}
        />
        <Button
          style={{ flex: 1 }}
          title="decrement"
          onPress={() => dispatch(decrement())}
        />
      </View>
      <Divider />
      <Text>React Navigation</Text>
      <View style={styles.section}>
        <Button
          style={{ flex: 1 }}
          title="Goto About(useRouting)"
          onPress={() => navigate({ routeName: 'About' })}
        />
        <Button
          style={{ flex: 1 }}
          title={<Link routeName="About">{'Goto About(<Link />)'}</Link>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default App;
