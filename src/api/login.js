import request from "@/utils/request";
// 登陆
export function handleLogin(query) {
    return request({
        url: "/users/login",
        method: "post",
        data: query
    });
}
// 获取列表
export function FetchList(query) {
    return request({
        // url: "http://kagv8r.natappfree.cc//lists", // 跨域
        url: "/lists/test",
        method: "get",
        params: query
    });
}
