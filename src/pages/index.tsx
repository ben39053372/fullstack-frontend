// @generated: @expo/next-adapter@2.1.5
import React from 'react';
import '../i18n';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';
import { Button } from '../components/Groups/Button';
import { Text } from '../components/Atoms/Text/index';
import { toAbout, toLogin, toProfile } from '../const/routes';

const App = () => {
  const { t, i18n } = useTranslation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { navigate } = useRouting();

  return (
    <ScrollView style={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Text textVariant="h1" css={{ textAlign: 'center' }}>
        hi Welcome to Expo + Next.js 👋
      </Text>
      <Text textVariant="h2" css={{ textAlign: 'center' }}>
        i18n{process.env.NEXT_PUBLIC_BACKEND_URL}
      </Text>
      <Text textVariant="h3" css={{ textAlign: 'center' }}>
        {t('test')}
      </Text>
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

      <Text textVariant="h2" css={{ textAlign: 'center' }}>
        Redux
      </Text>

      <Text textVariant="h3" css={{ textAlign: 'center' }}>
        Count: {count}
      </Text>
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
      <Text textVariant="h2" css={{ textAlign: 'center' }}>
        React Navigation
      </Text>

      <View style={styles.section}>
        <Button text="Call Hello World" textVariant="h4" onPress={() => {}} />
        <Button
          text="Goto About(useRouting)"
          textVariant="h4"
          onPress={() => navigate(toAbout)}
        />
        <Button
          text="Goto Private(useRouting)"
          textVariant="h4"
          onPress={() => navigate(toProfile)}
        />
        <Button
          text="Goto Login(useRouting)"
          textVariant="h4"
          onPress={() => navigate(toLogin)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default App;
