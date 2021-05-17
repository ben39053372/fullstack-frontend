import { useRouting } from 'expo-next-react-navigation';
import { useEffect } from 'react';

export const isLogin = () => {
  return false;
};

export const setToken = () => {};

export const getToken = () => {
  return 'token';
};

export const useRedirect = ({ path }: { path: string }) => {
  const route = useRouting();
  useEffect(() => {
    if (!isLogin()) {
      route.navigate({ routeName: path });
    }
  }, []);
};
