import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {get} from 'lodash';

const headers: {[k: string]: string} = {};
const apiServerUrl = Config.API_SERVER_URL;

type AxiosInstanceType = {
  version: string;
};

const getAxiosInstance = async ({version}: AxiosInstanceType) => {
  const axiosInstance = axios.create({
    baseURL: `${apiServerUrl}/${version}`,
    headers,
  });

  axiosInstance.interceptors.response.use(
    response => {
      const arr = [200, 201];
      if (arr.indexOf(response.status) !== -1) {
        const res: any = {};
        res.status = response.status;
        res.data = response.data;
        return res;
      }
      return Promise.reject(response);
    },
    (error: any) => {
      const errorData = get(error, 'response.data', {
        status: false,
        message: 'Lỗi không xác định',
      });
      return Promise.reject(errorData);
    },
  );

  return axiosInstance;
};

const api = async (
  url: string,
  data?: any,
  options: AxiosRequestConfig = {},
  version: string = Config.API_VERSION,
) => {
  try {
    const API = await getAxiosInstance({version});
    if (options.method === 'GET') {
      return API({url, params: data, ...options});
    }
    return API({url, data, method: 'POST', ...options});
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
