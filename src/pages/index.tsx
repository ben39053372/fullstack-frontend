// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import { StyleSheet, View } from 'react-native';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';
import { helloApi } from '../apis/user';
import { Button } from '../components/Group/Button';
import { Text } from '../components/Atoms/Text/index';

const App = () => {
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { navigate } = useRouting();

  return (
    <View style={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Text variant="h1">hi Welcome to Expo + Next.js 👋</Text>
      <Text variant="h2">i18n{process.env.NEXT_PUBLIC_BACKEND_URL}</Text>
      <Text variant="h3">{t('test')}</Text>
      <View style={styles.section}>
        <Button
          text="change to en"
          textVariant="h4"
          onPress={() => i18n.changeLanguage('en')}
        />
        <Button
          text="change to zh-HK"
          textVariant="h4"
          onPress={() => i18n.changeLanguage('zh-hk')}
        />
      </View>

      <Text variant="h2">Redux</Text>

      <Text variant="h3">Count: {count}</Text>
      <View style={styles.section}>
        <Button
          text="increment"
          textVariant="h4"
          onPress={() => dispatch(increment())}
        />
        <Button
          text="decrement"
          textVariant="h4"
          onPress={() => dispatch(decrement())}
        />
      </View>
      <Text variant="h2">React Navigation</Text>
      <View style={styles.section}>
        <Button
          text="Goto About(useRouting)"
          textVariant="h4"
          onPress={() => navigate({ routeName: 'About' })}
        />
      </View>

      <View style={styles.section}>
        <Button
          text="Call Hello World"
          textVariant="h4"
          onPress={() => helloApi()}
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;
