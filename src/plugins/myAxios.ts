import axios, { AxiosInstance } from "axios";

const myAxios: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
  });

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('要发送请求啦',config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('收到响应了' ,response)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


export default myAxios;