// @generated: @expo/next-adapter@2.1.5
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { increment, decrement } from '../features/counter/counterSlice';
import { useRouting } from 'expo-next-react-navigation';
import Head from 'next/head';
import { helloApi } from '../apis/user';
import { GetServerSideProps } from 'next';

interface props {
  data: any;
}

export const getServerSideProps: GetServerSideProps<props> = async (
  context,
) => {
  // const { data } = await helloApi();
  return {
    props: {
      data: {}
    },
  };
};

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
      <Text>hi Welcome to Expo + Next.js 👋</Text>
      <Text>i18n{process.env.NEXT_PUBLIC_BACKEND_URL}</Text>
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
      <Text>Redux</Text>

      <Text>Count: {count}</Text>
      <View style={styles.section}>
        <Button title="increment" onPress={() => dispatch(increment())} />
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Text>React Navigation</Text>
      <View style={styles.section}>
        <Button
          title="Goto About(useRouting)"
          onPress={() => navigate({ routeName: 'About' })}
        />
      </View>

      <View style={styles.section}>
        <Button title="Call Hello World" onPress={() => helloApi()} />
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
