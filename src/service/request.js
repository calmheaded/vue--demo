import axios from "axios";

// axios默认配置
axios.defaults.baseURL = "";
axios.defaults.timeout = 5000;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        sessionStorage.setItem("token", "123");
        if (sessionStorage.getItem("token") != null) {
            config.headers.Authorization = sessionStorage.getItem("token");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    this.$router.push({ path: "/login" });
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data);
    }
);
