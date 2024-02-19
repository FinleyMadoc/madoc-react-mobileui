import axios from 'axios';
var axiosConfig = {
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  responseType: 'json',
};
var AxiosInstance = axios.create(axiosConfig);
AxiosInstance.interceptors.response.use(
  function (res) {
    if (res.status !== 200 || !res.data) {
      throw 'error';
    }

    return res.data;
  },
  function (error) {
    throw error;
  }
);
export default AxiosInstance;
