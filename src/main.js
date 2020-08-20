import Vue from "vue";
// import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.less"; // global css
// axios
import axios from "axios";
Vue.prototype.axios = axios;
axios.defaults.headers.common.token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTcyMjg3NDcsInVpZCI6NjE5LCJlbWFpbCI6IiIsIm1vYmlsZSI6IjE1MTI5NzA4NjM1IiwicGFyZW50X2lkIjowLCJ0eXBlIjoxLCJzdGF0dXMiOjEsInNlY3JldF9rZXkiOiJNaEhWcW9HZEJWclprcm9UcW14T3EzcWJjT0JUVHBpZ28xIn0."; // token
// axios.interceptors.response.use(
//     response => {
//       if (response.data.code == 401) {
//         //清除sessionStorage
//         store.dispatch('logout').then(res => {
//           window.location.href = localStorage.getItem('hostUrl')
//         });
//       }
//       return response;
//     },
//     error => {
//       return Promise.reject(error);
//     });
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
