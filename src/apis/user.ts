import { server } from '../utils/ApiServices/mainServer';

export const helloApi = async () => {
  const result = await server.get('/');
  return result;
};

export const LoginApi = async () => {
  const res = await server.get('/user/login');
};
