import axiosInstance from "./instance.js";

const get = (url, params) => {
    return axiosInstance.get(url);
}

const post = (url, data) => {
    return axiosInstance.post(url, data);
}

export default {
    get,
    post
}