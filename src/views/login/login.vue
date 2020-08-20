<!--登录页-->
<template>
  <el-form
    :model="loginForm"
    :rules="loginRules"
    ref="loginForm"
    label-position="left"
    label-width="0px"
    class="login-container"
  >
    <h3 class="title text-center">简洁版demo</h3>
    <!-- <el-alert style="margin-bottom:10px;" title="帐号admin或guest，密码123456，帐号权限不同!" type="success"></el-alert> -->
    <el-form-item prop="loginuser">
      <el-input
        type="text"
        v-model="loginForm.loginuser"
        auto-complete="off"
        placeholder="账号"
        @keyup.enter.native="loginIn"
        :autofocus="true"
      ></el-input>
    </el-form-item>
    <el-form-item prop="loginpwd">
      <el-input
        type="password"
        v-model="loginForm.loginpwd"
        auto-complete="off"
        placeholder="密码"
        @keyup.enter.native="loginIn"
      ></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;margin-top:10px;">
      <el-button
        type="primary"
        style="width:100%;"
        @click.native.prevent="loginIn"
        :loading="logining"
      >登录</el-button>
      <!--<el-button type="primary" style="width:50%;" @click.native.prevent="test" :loading="logining">测试</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
// import { requestLogin, login } from "../service/api";
import { handleLogin } from "@/api/login.js";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      loginForm: {
        loginuser: "admin",
        loginpwd: "123456",
      },
      loginRules: {
        loginuser: [{ required: true, message: "请输入账号", trigger: "blur" }],
        loginpwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: false,
    };
  },
  methods: {
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
    loginIn(ev) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //   this.logining = true;
          var loginParams = {
            userName: this.loginForm.loginuser,
            userPwd: this.loginForm.loginpwd,
          };
          //   调用方式1
          //   axios.post("/users/login", loginParams).then((res) => {
          //     console.log(res, "res");
          //   });
          //  封装方式调用1 有点问题
          // this.api.login(loginParams);
          //  封装方式调用2
          //   console.log(handleLogin, "handleLogin");
          handleLogin(loginParams).then((res) => {
            console.log(res, "res");
            this.logining = false;
            // const { msg, status, user } = res.data;
            if (status != 0) {
              this.$message({
                message: msg,
                type: "error",
              });
            } else {
              //   sessionStorage.setItem("user", JSON.stringify(user));
              this.$router.push({ path: "/home" });
            }
          });
        } else {
          return false;
        }
      });
    },
    test() {
      login({ account: "admin" }).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

<style>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
.text-center {
  text-align: center;
}
</style>
