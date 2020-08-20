// import axios from "axios";

// // axios默认配置
// axios.defaults.baseURL = "";
// axios.defaults.timeout = 5000;

// // http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         // sessionStorage.setItem("token","123");
//         // if(sessionStorage.getItem("token")!=null){
//         // 	config.headers.Authorization = sessionStorage.getItem("token");
//         // }
//         // return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// );

// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         // if (error.response) {
//         //     switch (error.response.status) {
//         //         case 401:
//         //             // 401 清除token信息并跳转到登录页面
//         //             // store.commit(types.LOGOUT);
//         //             this.$router.push({ path: "/login" });
//         //     }
//         // }
//         // // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//         // return Promise.reject(error.response.data);
//     }
// );
// 封装方式2 通过创建axios实例
// 需要引入elementUI或其它ui框架 messageMox 等插件 以及状态码继续完善
import axios from "axios";
// 有bug  貌似没有返回一个promise
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000 // request timeout
});
service.interceptors.response.use(
    config => {},
    error => {
        return Promise.reject(error);
    }
);
// response interceptor
service.interceptors.response.use(
    // response => {},
    // response => Promise.resolve(response),
    response => {
        console.log(response, "response");
        return response;
    },
    error => {
        console.log("err" + error); // for debug
        return Promise.reject(error);
    }
);
export default axios;
