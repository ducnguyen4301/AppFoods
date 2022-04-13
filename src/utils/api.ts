import axios from 'axios';
import Configs from 'react-native-config';

const api = axios.create({
  baseURL: Configs.API_SERVER_URL,
});

api.interceptors.request.use(async config => {
  return config;
});

api.interceptors.response.use(
  response => response.data,
  ({message, response}) => {
    if (response?.data) {
      return Promise.reject({
        message: response.data.error || response.data.message || message,
        code: response.data.code ?? -1,
      });
    }
    return Promise.reject({message, code: response?.status ?? -1});
  },
);

export default api;
