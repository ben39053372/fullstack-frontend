import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toLogin } from '../../../const/routes';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Redirect = () => {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    if (Platform.OS === 'web') {
      router.replace('/');
    } else {
      navigation.navigate('/');
    }
  }, []);
  return <></>;
};
