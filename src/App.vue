<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>-->
    <router-view />
  </div>
</template>
<script>
import Api from "./api.js";
import requestList from "@/requestList.js";
const api = new Api(requestList);
export default {
  name: "App",
  created() {
    this.api = api;
    // 测试
    console.log(this.api, "api");
    const data = {
      userName: "admin",
      userPwd: "123456",
    };
    // this.api.login(data);
  },
};
</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
