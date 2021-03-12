
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 根据process.env.VUE_APP_BASE_API 来判断是否添加前缀
 */
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

//POST传参序列化(添加请求拦截器)
service.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    config.headers.Authorization = localStorage.getItem("token");
    return config;
}, (error) => {
    // console.log('错误的传参')
    return Promise.reject(error);
});
 
//返回状态判断(添加响应拦截器)
service.interceptors.response.use((res) => {
    if (res.msg == '[]') {
        Message({
            showClose: true,
            message: res.msg,
            type: 'error',
            duration: 2000
        });
    }
    return res;
}, (error) => {
    // console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function post(url, params) {
    return new Promise((resolve, reject) => {
        service.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function get(url, param) {
    return new Promise((resolve, reject) => {
        service.get(url, { params: param })
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    post,
    get
}
