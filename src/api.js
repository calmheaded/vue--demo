import Axios from "axios";
// Axios.defaults.baseURL = 'https://scm-api.sao.so'
// 可以在下面摄者请求头携带token
class Api {
    // constructor(x,y){
    //     this.x = x;
    //     this.y = y;
    // }
    constructor(requestList) {
        this._init(requestList);
    }

    // 初始化
    _init(requestList) {
        console.log("init执行");
        requestList.forEach(item => {
            this[item.url] = item.url;
            this[item.name] = function(data) {
                return this._ajax(item, data);
            };
        });
    }

    _ajax(options, data) {
        console.log(options, "options");
        const url = options.url;
        if (!url) {
            console.error("缺少路径参数");
        }
        console.log(url, "_ajaxurl");
        const method = options.methods || "POST";
        const responseType = options.responseType || "json";
        const contentType = options.contentType || "application/json";
        const params =
            method.toUpperCase() === "GET" || method.toUpperCase === "DELETE"
                ? data
                : {};
        const ajaxOptions = {
            method,
            url,
            data,
            params,
            headers: {
                // https://blog.csdn.net/baichoufei90/article/details/84030479
                "Content-Type": contentType
            }
        };
        console.log(ajaxOptions, "ajaxOptions");
        return new Promise((resolve, reject) => {
            Axios({
                ...ajaxOptions
            }).then(res => {
                console.log(res, "Axiosres");
                if (res.status == 200) {
                    resolve(res);
                } else {
                    reject(res);
                }
                // if (res.data.code == 1000) {
                //     resolve(res);
                // } else {
                //     reject(res);
                // }
            });
        });
    }
}
export default Api;
