// @generated: @expo/next-adapter@2.1.5
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';
import { helloApi } from '../apis/user';
import { Button } from '../components/Atoms/Button';
import { H1, H2, H3 } from '../components/Atoms/Text/index';

interface props {
  data: any;
}

const App = ({ data }: props) => {
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { navigate } = useRouting();

  return (
    <View style={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <H1>hi Welcome to Expo + Next.js 👋</H1>
      <H2>i18n{process.env.NEXT_PUBLIC_BACKEND_URL}</H2>
      <H3>{t('test')}</H3>
      <View style={styles.section}>
        <Button
          text="change to en"
          textVariant="H3"
          onPress={() => i18n.changeLanguage('en')}
        />
        <Button
          text="change to zh-HK"
          textVariant="H3"
          onPress={() => i18n.changeLanguage('zh-hk')}
        />
      </View>
      <H2>Redux</H2>

      <H3>Count: {count}</H3>
      <View style={styles.section}>
        <Button
          text="increment"
          textVariant="H3"
          onPress={() => dispatch(increment())}
        />
        <Button
          text="decrement"
          textVariant="H3"
          onPress={() => dispatch(decrement())}
        />
      </View>
      <H2>React Navigation</H2>
      <View style={styles.section}>
        <Button
          text="Goto About(useRouting)"
          textVariant="H3"
          onPress={() => navigate({ routeName: 'About' })}
        />
      </View>

      <View style={styles.section}>
        <Button
          text="Call Hello World"
          textVariant="H3"
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
    justifyContent: 'space-evenly',
  },
});

export default App;
