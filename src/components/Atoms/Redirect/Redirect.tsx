import { useEffect } from 'react';
import { useRouting } from 'expo-next-react-navigation';
import { toLogin } from '../../../const/routes';

export const Redirect = () => {
  const { navigate } = useRouting();
  useEffect(() => navigate(toLogin), []);
  return <></>;
};
