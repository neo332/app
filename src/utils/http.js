/**
 * 请求封装
 * */

import axios from 'axios';
import config from '@/config';

// 创建axios实例
const http = axios.create({
    baseURL: config.baseURL,
    timeout: 10000
});

// request拦截配置
http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

/**
 * response拦截配置
 * 统一处理http状态
 * */

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        Promise.reject(error);
    }
);

export default http;
