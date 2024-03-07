import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 10 * 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

// 响应拦截器
// 2xx 范围内的状态码都会触发该函数
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default axiosInstance;

