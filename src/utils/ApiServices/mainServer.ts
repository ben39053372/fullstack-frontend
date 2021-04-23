import axios from 'axios';

export const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'localhost:3001',
  timeout: 2000,
  // validateStatus: function (status) {
  //   return status >= 200 && status < 500; // default
  // },
});

// server.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// server.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   },
// );
